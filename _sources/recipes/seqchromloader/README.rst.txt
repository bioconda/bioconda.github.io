:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqchromloader'
.. highlight: bash

seqchromloader
==============

.. conda:recipe:: seqchromloader
   :replaces_section_title:
   :noindex:

   Sequence and chromatin dataloader for deep learning

   :homepage: https://github.com/yztxwd/seqchromloader
   :documentation: https://github.com/seqcode/seqchromloader
   
   :developer docs: https://github.com/seqcode/seqchromloader
   :license: MIT
   :recipe: /`seqchromloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqchromloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqchromloader/meta.yaml>`_

   


.. conda:package:: seqchromloader

   |downloads_seqchromloader| |docker_seqchromloader|

   :versions:
      
      

      ``0.6.2-0``,  ``0.5.3-0``,  ``0.4.0-0``,  ``0.2.4-0``,  ``0.2.1-0``

      

   
   :depends numpy: ``>=1.17``
   :depends pandas: 
   :depends pybedtools: ``>=0.9.0``
   :depends pybigwig: ``>=0.3.0``
   :depends pyfaidx: ``>=0.7.0``
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.7,<3.10``
   :depends pytorch: ``>=1.10.0``
   :depends pytorch-lightning: ``>=1.7.0,<1.8.0``
   :depends webdataset: ``>=0.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqchromloader

   and update with::

      conda update seqchromloader

   or use the docker container::

      docker pull quay.io/biocontainers/seqchromloader:<tag>

   (see `seqchromloader/tags`_ for valid values for ``<tag>``)


.. |downloads_seqchromloader| image:: https://img.shields.io/conda/dn/bioconda/seqchromloader.svg?style=flat
   :target: https://anaconda.org/bioconda/seqchromloader
   :alt:   (downloads)
.. |docker_seqchromloader| image:: https://quay.io/repository/biocontainers/seqchromloader/status
   :target: https://quay.io/repository/biocontainers/seqchromloader
.. _`seqchromloader/tags`: https://quay.io/repository/biocontainers/seqchromloader?tab=tags


.. raw:: html

    <script>
        var package = "seqchromloader";
        var versions = ["0.6.2","0.5.3","0.4.0","0.2.4","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqchromloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqchromloader/README.html