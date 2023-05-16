:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barseqcount'
.. highlight: bash

barseqcount
===========

.. conda:recipe:: barseqcount
   :replaces_section_title:
   :noindex:

   Analysis of DNA barcode sequencing experiments

   :homepage: https://github.com/damienmarsic/barseqcount
   :documentation: https://barseqcount.readthedocs.io
   
   :license: GPL-3.0
   :recipe: /`barseqcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barseqcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barseqcount/meta.yaml>`_

   


.. conda:package:: barseqcount

   |downloads_barseqcount| |docker_barseqcount|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends dmbiolib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends regex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install barseqcount

   and update with::

      conda update barseqcount

   or use the docker container::

      docker pull quay.io/biocontainers/barseqcount:<tag>

   (see `barseqcount/tags`_ for valid values for ``<tag>``)


.. |downloads_barseqcount| image:: https://img.shields.io/conda/dn/bioconda/barseqcount.svg?style=flat
   :target: https://anaconda.org/bioconda/barseqcount
   :alt:   (downloads)
.. |docker_barseqcount| image:: https://quay.io/repository/biocontainers/barseqcount/status
   :target: https://quay.io/repository/biocontainers/barseqcount
.. _`barseqcount/tags`: https://quay.io/repository/biocontainers/barseqcount?tab=tags


.. raw:: html

    <script>
        var package = "barseqcount";
        var versions = ["0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barseqcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barseqcount/README.html