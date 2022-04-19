:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgcplotter'
.. highlight: bash

mgcplotter
==========

.. conda:recipe:: mgcplotter
   :replaces_section_title:
   :noindex:

   Microbial Genome Circular plotting tool using Circos

   :homepage: https://github.com/moshi4/MGCplotter/
   :license: GPL-3.0
   :recipe: /`mgcplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcplotter/meta.yaml>`_

   


.. conda:package:: mgcplotter

   |downloads_mgcplotter| |docker_mgcplotter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79,<2.0``
   :depends circos: ``0.69.8``
   :depends cogclassifier: ``>=1.0.4,<2.0.0``
   :depends matplotlib-base: ``>=3.5.1,<4.0.0``
   :depends mmseqs2: ``13.45111``
   :depends pandas: ``>=1.4.2,<2.0.0``
   :depends python: ``>=3.8,<4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgcplotter

   and update with::

      conda update mgcplotter

   or use the docker container::

      docker pull quay.io/biocontainers/mgcplotter:<tag>

   (see `mgcplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_mgcplotter| image:: https://img.shields.io/conda/dn/bioconda/mgcplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/mgcplotter
   :alt:   (downloads)
.. |docker_mgcplotter| image:: https://quay.io/repository/biocontainers/mgcplotter/status
   :target: https://quay.io/repository/biocontainers/mgcplotter
.. _`mgcplotter/tags`: https://quay.io/repository/biocontainers/mgcplotter?tab=tags


.. raw:: html

    <script>
        var package = "mgcplotter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgcplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgcplotter/README.html