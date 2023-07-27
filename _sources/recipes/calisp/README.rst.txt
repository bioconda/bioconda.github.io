:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calisp'
.. highlight: bash

calisp
======

.. conda:recipe:: calisp
   :replaces_section_title:
   :noindex:

   Estimate isotopic composition of peptides from proteomics mass spectrometry data

   :homepage: https://github.com/kinestetika/Calisp
   :license: MIT
   :recipe: /`calisp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp/meta.yaml>`_

   


.. conda:package:: calisp

   |downloads_calisp| |docker_calisp|

   :versions:
      
      

      ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.10-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends pymzml: 
   :depends python: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install calisp

   and update with::

      conda update calisp

   or use the docker container::

      docker pull quay.io/biocontainers/calisp:<tag>

   (see `calisp/tags`_ for valid values for ``<tag>``)


.. |downloads_calisp| image:: https://img.shields.io/conda/dn/bioconda/calisp.svg?style=flat
   :target: https://anaconda.org/bioconda/calisp
   :alt:   (downloads)
.. |docker_calisp| image:: https://quay.io/repository/biocontainers/calisp/status
   :target: https://quay.io/repository/biocontainers/calisp
.. _`calisp/tags`: https://quay.io/repository/biocontainers/calisp?tab=tags


.. raw:: html

    <script>
        var package = "calisp";
        var versions = ["3.0.12","3.0.11","3.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calisp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calisp/README.html