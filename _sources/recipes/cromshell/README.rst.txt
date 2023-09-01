:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cromshell'
.. highlight: bash

cromshell
=========

.. conda:recipe:: cromshell
   :replaces_section_title:
   :noindex:

   Command\-line interface to the Cromwell workflow manager

   :homepage: https://github.com/broadinstitute/cromshell
   :license: BSD / BSD-3-Clause
   :recipe: /`cromshell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell/meta.yaml>`_

   


.. conda:package:: cromshell

   |downloads_cromshell| |docker_cromshell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=8``
   :depends gcsfs: ``>=2022.3.0``
   :depends google-cloud-bigquery: ``>=3.5.0``
   :depends jq: 
   :depends pygments: ``>=2.12.0``
   :depends python: ``>=3``
   :depends requests: ``>=2.27.1``
   :depends tabulate: ``>=0.8.9``
   :depends termcolor: ``>=1.1.0``
   :depends womtool: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cromshell

   and update with::

      mamba update cromshell

  To create a new environment, run::

      mamba create --name myenvname cromshell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cromshell:<tag>

   (see `cromshell/tags`_ for valid values for ``<tag>``)


.. |downloads_cromshell| image:: https://img.shields.io/conda/dn/bioconda/cromshell.svg?style=flat
   :target: https://anaconda.org/bioconda/cromshell
   :alt:   (downloads)
.. |docker_cromshell| image:: https://quay.io/repository/biocontainers/cromshell/status
   :target: https://quay.io/repository/biocontainers/cromshell
.. _`cromshell/tags`: https://quay.io/repository/biocontainers/cromshell?tab=tags


.. raw:: html

    <script>
        var package = "cromshell";
        var versions = ["2.0.0","0.5.3","0.5.2","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromshell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromshell/README.html