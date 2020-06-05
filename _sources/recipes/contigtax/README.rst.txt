:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contigtax'
.. highlight: bash

contigtax
=========

.. conda:recipe:: contigtax
   :replaces_section_title:
   :noindex:

   Assign taxonomy to metagenomic contigs \(previously know as tango\)

   :homepage: https://github.com/NBISweden/contigtax
   :license: MIT
   :recipe: /`contigtax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contigtax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contigtax/meta.yaml>`_

   


.. conda:package:: contigtax

   |downloads_contigtax| |docker_contigtax|

   :versions:
      
      

      ``0.5.9-0``

      

   
   :depends biopython: 
   :depends diamond: ``>=0.8.37,<=0.9.24``
   :depends ete3: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install contigtax

   and update with::

      conda update contigtax

   or use the docker container::

      docker pull quay.io/biocontainers/contigtax:<tag>

   (see `contigtax/tags`_ for valid values for ``<tag>``)


.. |downloads_contigtax| image:: https://img.shields.io/conda/dn/bioconda/contigtax.svg?style=flat
   :target: https://anaconda.org/bioconda/contigtax
   :alt:   (downloads)
.. |docker_contigtax| image:: https://quay.io/repository/biocontainers/contigtax/status
   :target: https://quay.io/repository/biocontainers/contigtax
.. _`contigtax/tags`: https://quay.io/repository/biocontainers/contigtax?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contigtax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contigtax/README.html