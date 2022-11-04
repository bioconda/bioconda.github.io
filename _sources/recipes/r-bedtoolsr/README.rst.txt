:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bedtoolsr'
.. highlight: bash

r-bedtoolsr
===========

.. conda:recipe:: r-bedtoolsr
   :replaces_section_title:
   :noindex:

   R package wrapping bedtools

   :homepage: https://github.com/PhanstielLab/bedtoolsr
   :license: MIT / MIT
   :recipe: /`r-bedtoolsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedtoolsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedtoolsr/meta.yaml>`_

   


.. conda:package:: r-bedtoolsr

   |downloads_r-bedtoolsr| |docker_r-bedtoolsr|

   :versions:
      
      

      ``2.30.0.2-1``,  ``2.30.0.2-0``

      

   
   :depends bedtools: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bedtoolsr

   and update with::

      conda update r-bedtoolsr

   or use the docker container::

      docker pull quay.io/biocontainers/r-bedtoolsr:<tag>

   (see `r-bedtoolsr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bedtoolsr| image:: https://img.shields.io/conda/dn/bioconda/r-bedtoolsr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bedtoolsr
   :alt:   (downloads)
.. |docker_r-bedtoolsr| image:: https://quay.io/repository/biocontainers/r-bedtoolsr/status
   :target: https://quay.io/repository/biocontainers/r-bedtoolsr
.. _`r-bedtoolsr/tags`: https://quay.io/repository/biocontainers/r-bedtoolsr?tab=tags


.. raw:: html

    <script>
        var package = "r-bedtoolsr";
        var versions = ["2.30.0.2","2.30.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bedtoolsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bedtoolsr/README.html