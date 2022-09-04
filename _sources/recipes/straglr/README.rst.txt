:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straglr'
.. highlight: bash

straglr
=======

.. conda:recipe:: straglr
   :replaces_section_title:
   :noindex:

   Short\-tandem repeat genotyping using long reads 

   :homepage: https://github.com/bcgsc/straglr
   :license: GPL3 / MIT License
   :recipe: /`straglr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02447-3`

   


.. conda:package:: straglr

   |downloads_straglr| |docker_straglr|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``

      

   
   :depends blast: 
   :depends intspan: ``>=1.5.8``
   :depends numpy: ``>=1.14.2``
   :depends pathos: ``>=0.2.3``
   :depends pybedtools: ``>=0.7.9``
   :depends pysam: ``>=0.14.0``
   :depends python: 
   :depends scikit-learn: ``>=0.19.0``
   :depends scipy: ``>=1.0.1``
   :depends trf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install straglr

   and update with::

      conda update straglr

   or use the docker container::

      docker pull quay.io/biocontainers/straglr:<tag>

   (see `straglr/tags`_ for valid values for ``<tag>``)


.. |downloads_straglr| image:: https://img.shields.io/conda/dn/bioconda/straglr.svg?style=flat
   :target: https://anaconda.org/bioconda/straglr
   :alt:   (downloads)
.. |docker_straglr| image:: https://quay.io/repository/biocontainers/straglr/status
   :target: https://quay.io/repository/biocontainers/straglr
.. _`straglr/tags`: https://quay.io/repository/biocontainers/straglr?tab=tags


.. raw:: html

    <script>
        var package = "straglr";
        var versions = ["1.3.0","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straglr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straglr/README.html