:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abnumber'
.. highlight: bash

abnumber
========

.. conda:recipe:: abnumber
   :replaces_section_title:
   :noindex:

   AbNumber \- Antibody numbering using ANARCI

   :homepage: https://github.com/prihoda/AbNumber
   :license: MIT / MIT
   :recipe: /`abnumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abnumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abnumber/meta.yaml>`_

   


.. conda:package:: abnumber

   |downloads_abnumber| |docker_abnumber|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends anarci: ``2020.04.23``
   :depends biopython: 
   :depends pandas: 
   :depends python: ``>=3.6``
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

      mamba install abnumber

   and update with::

      mamba update abnumber

  To create a new environment, run::

      mamba create --name myenvname abnumber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abnumber:<tag>

   (see `abnumber/tags`_ for valid values for ``<tag>``)


.. |downloads_abnumber| image:: https://img.shields.io/conda/dn/bioconda/abnumber.svg?style=flat
   :target: https://anaconda.org/bioconda/abnumber
   :alt:   (downloads)
.. |docker_abnumber| image:: https://quay.io/repository/biocontainers/abnumber/status
   :target: https://quay.io/repository/biocontainers/abnumber
.. _`abnumber/tags`: https://quay.io/repository/biocontainers/abnumber?tab=tags


.. raw:: html

    <script>
        var package = "abnumber";
        var versions = ["0.3.6","0.3.5","0.3.4","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abnumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abnumber/README.html