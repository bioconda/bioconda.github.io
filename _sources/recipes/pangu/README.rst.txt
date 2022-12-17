:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangu'
.. highlight: bash

pangu
=====

.. conda:recipe:: pangu
   :replaces_section_title:
   :noindex:

   CYP2D6 PGx caller for PacBio HiFi Data

   :homepage: https://github.com/PacificBiosciences/pangu
   :license: BSD-3-Clause-Clear
   :recipe: /`pangu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangu/meta.yaml>`_

   


.. conda:package:: pangu

   |downloads_pangu| |docker_pangu|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends mappy: ``>=2.24``
   :depends numpy: ``>=1.23.3``
   :depends pandas: ``>=1.5.0``
   :depends pysam: ``>=0.19.1``
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pangu

   and update with::

      conda update pangu

   or use the docker container::

      docker pull quay.io/biocontainers/pangu:<tag>

   (see `pangu/tags`_ for valid values for ``<tag>``)


.. |downloads_pangu| image:: https://img.shields.io/conda/dn/bioconda/pangu.svg?style=flat
   :target: https://anaconda.org/bioconda/pangu
   :alt:   (downloads)
.. |docker_pangu| image:: https://quay.io/repository/biocontainers/pangu/status
   :target: https://quay.io/repository/biocontainers/pangu
.. _`pangu/tags`: https://quay.io/repository/biocontainers/pangu?tab=tags


.. raw:: html

    <script>
        var package = "pangu";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangu/README.html