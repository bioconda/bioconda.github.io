:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcross'
.. highlight: bash

mcross
======

.. conda:recipe:: mcross
   :replaces_section_title:
   :noindex:

   The script to detect RNA\-protein cross linking sites

   :homepage: https://github.com/huijfeng/mCross
   :license: MIT
   :recipe: /`mcross <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcross>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcross/meta.yaml>`_

   


.. conda:package:: mcross

   |downloads_mcross| |docker_mcross|

   :versions:
      
      

      ``0.9.5-0``

      

   
   :depends bioconductor-limma: ``>=3.50.1``
   :depends bioconductor-motifstack: ``>=1.38.0``
   :depends czlab_perl_lib: ``>=1.0.1``
   :depends r-base: ``>=4.1.2``
   :depends r-cowplot: ``>=1.1.1``
   :depends r-getopt: ``>=1.20.3``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-gridextra: ``>=2.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mcross

   and update with::

      conda update mcross

   or use the docker container::

      docker pull quay.io/biocontainers/mcross:<tag>

   (see `mcross/tags`_ for valid values for ``<tag>``)


.. |downloads_mcross| image:: https://img.shields.io/conda/dn/bioconda/mcross.svg?style=flat
   :target: https://anaconda.org/bioconda/mcross
   :alt:   (downloads)
.. |docker_mcross| image:: https://quay.io/repository/biocontainers/mcross/status
   :target: https://quay.io/repository/biocontainers/mcross
.. _`mcross/tags`: https://quay.io/repository/biocontainers/mcross?tab=tags


.. raw:: html

    <script>
        var package = "mcross";
        var versions = ["0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcross/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcross/README.html