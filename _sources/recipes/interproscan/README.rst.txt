:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interproscan'
.. highlight: bash

interproscan
============

.. conda:recipe:: interproscan
   :replaces_section_title:
   :noindex:

   InterPro integrates together predictive information about proteins function from a number of partner resources

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: Apache / GPLv3
   :recipe: /`interproscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan/meta.yaml>`_

   


.. conda:package:: interproscan

   |downloads_interproscan| |docker_interproscan|

   :versions:
      
      

      ``5.54_87.0-2``,  ``5.54_87.0-1``,  ``5.54_87.0-0``,  ``5.52_86.0-0``

      

   
   :depends blast: ``>=2.12``
   :depends cath-tools: 
   :depends emboss: 
   :depends hmmer: ``>=3``
   :depends hmmer2: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends openjdk: ``>=11``
   :depends perl: ``>=5.08``
   :depends pftools: 
   :depends python: ``>=3``
   :depends sfld: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install interproscan

   and update with::

      conda update interproscan

   or use the docker container::

      docker pull quay.io/biocontainers/interproscan:<tag>

   (see `interproscan/tags`_ for valid values for ``<tag>``)


.. |downloads_interproscan| image:: https://img.shields.io/conda/dn/bioconda/interproscan.svg?style=flat
   :target: https://anaconda.org/bioconda/interproscan
   :alt:   (downloads)
.. |docker_interproscan| image:: https://quay.io/repository/biocontainers/interproscan/status
   :target: https://quay.io/repository/biocontainers/interproscan
.. _`interproscan/tags`: https://quay.io/repository/biocontainers/interproscan?tab=tags


.. raw:: html

    <script>
        var package = "interproscan";
        var versions = ["5.54_87.0","5.54_87.0","5.54_87.0","5.52_86.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interproscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interproscan/README.html