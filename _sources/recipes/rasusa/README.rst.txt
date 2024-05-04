:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rasusa'
.. highlight: bash

rasusa
======

.. conda:recipe:: rasusa
   :replaces_section_title:
   :noindex:

   Randomly subsample sequencing reads or alignments

   :homepage: https://github.com/mbhall88/rasusa
   :license: MIT
   :recipe: /`rasusa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rasusa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rasusa/meta.yaml>`_

   


.. conda:package:: rasusa

   |downloads_rasusa| |docker_rasusa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.0.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-1</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.0.0-0``,  ``0.8.0-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install rasusa

   and update with::

      mamba update rasusa

  To create a new environment, run::

      mamba create --name myenvname rasusa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rasusa:<tag>

   (see `rasusa/tags`_ for valid values for ``<tag>``)


.. |downloads_rasusa| image:: https://img.shields.io/conda/dn/bioconda/rasusa.svg?style=flat
   :target: https://anaconda.org/bioconda/rasusa
   :alt:   (downloads)
.. |docker_rasusa| image:: https://quay.io/repository/biocontainers/rasusa/status
   :target: https://quay.io/repository/biocontainers/rasusa
.. _`rasusa/tags`: https://quay.io/repository/biocontainers/rasusa?tab=tags


.. raw:: html

    <script>
        var package = "rasusa";
        var versions = ["2.0.0","1.0.0","0.8.0","0.7.1","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rasusa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rasusa/README.html