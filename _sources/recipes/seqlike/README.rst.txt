:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqlike'
.. highlight: bash

seqlike
=======

.. conda:recipe:: seqlike
   :replaces_section_title:
   :noindex:

   Flexible biological sequence objects in Python

   :homepage: https://pypi.org/project/seqlike/
   :license: Apache-2.0
   :recipe: /`seqlike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlike/meta.yaml>`_

   


.. conda:package:: seqlike

   |downloads_seqlike| |docker_seqlike|

   :versions:
      
      

      ``1.1.6-0``

      

   
   :depends biopython: 
   :depends multipledispatch: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends pytest: 
   :depends pytest-regtest: 
   :depends python: ``>=3.6``
   :depends python-codon-tables: 
   :depends scikit-learn: 
   :depends weblogo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqlike

   and update with::

      conda update seqlike

   or use the docker container::

      docker pull quay.io/biocontainers/seqlike:<tag>

   (see `seqlike/tags`_ for valid values for ``<tag>``)


.. |downloads_seqlike| image:: https://img.shields.io/conda/dn/bioconda/seqlike.svg?style=flat
   :target: https://anaconda.org/bioconda/seqlike
   :alt:   (downloads)
.. |docker_seqlike| image:: https://quay.io/repository/biocontainers/seqlike/status
   :target: https://quay.io/repository/biocontainers/seqlike
.. _`seqlike/tags`: https://quay.io/repository/biocontainers/seqlike?tab=tags


.. raw:: html

    <script>
        var package = "seqlike";
        var versions = ["1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlike/README.html