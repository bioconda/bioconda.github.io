:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cialign'
.. highlight: bash

cialign
=======

.. conda:recipe:: cialign
   :replaces_section_title:
   :noindex:

   Toolkit for cleaning and interpreting multiple sequence alignments

   :homepage: https://github.com/KatyBrown/CIAlign
   :license: MIT / MIT
   :recipe: /`cialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cialign/meta.yaml>`_

   


.. conda:package:: cialign

   |downloads_cialign| |docker_cialign|

   :versions:
      
      

      ``1.0.18-0``

      

   
   :depends configargparse: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pillow: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cialign

   and update with::

      conda update cialign

   or use the docker container::

      docker pull quay.io/biocontainers/cialign:<tag>

   (see `cialign/tags`_ for valid values for ``<tag>``)


.. |downloads_cialign| image:: https://img.shields.io/conda/dn/bioconda/cialign.svg?style=flat
   :target: https://anaconda.org/bioconda/cialign
   :alt:   (downloads)
.. |docker_cialign| image:: https://quay.io/repository/biocontainers/cialign/status
   :target: https://quay.io/repository/biocontainers/cialign
.. _`cialign/tags`: https://quay.io/repository/biocontainers/cialign?tab=tags


.. raw:: html

    <script>
        var package = "cialign";
        var versions = ["1.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cialign/README.html