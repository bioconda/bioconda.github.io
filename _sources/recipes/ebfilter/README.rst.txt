:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebfilter'
.. highlight: bash

ebfilter
========

.. conda:recipe:: ebfilter
   :replaces_section_title:
   :noindex:

   EBFilter \(Empirical Bayesian Mutation Filtering\)

   :homepage: https://github.com/Genomon-Project/EBFilter
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`ebfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebfilter/meta.yaml>`_

   


.. conda:package:: ebfilter

   |downloads_ebfilter| |docker_ebfilter|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ebfilter

   and update with::

      conda update ebfilter

   or use the docker container::

      docker pull quay.io/biocontainers/ebfilter:<tag>

   (see `ebfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_ebfilter| image:: https://img.shields.io/conda/dn/bioconda/ebfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/ebfilter
   :alt:   (downloads)
.. |docker_ebfilter| image:: https://quay.io/repository/biocontainers/ebfilter/status
   :target: https://quay.io/repository/biocontainers/ebfilter
.. _`ebfilter/tags`: https://quay.io/repository/biocontainers/ebfilter?tab=tags


.. raw:: html

    <script>
        var package = "ebfilter";
        var versions = ["0.2.2","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebfilter/README.html