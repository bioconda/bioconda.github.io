:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ymp'
.. highlight: bash

ymp
===

.. conda:recipe:: ymp
   :replaces_section_title:
   :noindex:

   Create entire NGS pipelines with one command

   :homepage: https://ymp.readthedocs.io
   :developer docs: https://github.com/epruesse/ymp
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`ymp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp/meta.yaml>`_

   YMP allows composing complex NGS data analysis workflows from
   conceptual building blocks \(\"stages\"\) using a single command line
   statement. Pre\-tested conda environments are installed on\-the fly\,
   reference databases downloaded as needed and requested workflows
   executed using Snakemake.

   With YMP\, developing new pipelines or testing alternative
   approaches using differnt tools or optimizing parameters becomes
   easy. Results from previous results are reused where possible. The
   collection of stages included with YMP is can be extended with
   project specific YMP stage definitions or simple Snakefiles.



.. conda:package:: ymp

   |downloads_ymp| |docker_ymp|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends aiohttp: 
   :depends click: 
   :depends click-completion: 
   :depends coloredlogs: 
   :depends conda: 
   :depends drmaa: 
   :depends networkx: ``>=2``
   :depends pandas: ``>=0.20``
   :depends python: ``>=3.6``
   :depends ruamel.yaml: ``>0.15``
   :depends snakemake: ``5.4.*``
   :depends tqdm: ``>=4.21.0``
   :depends xdg: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ymp

   and update with::

      conda update ymp

   or use the docker container::

      docker pull quay.io/biocontainers/ymp:<tag>

   (see `ymp/tags`_ for valid values for ``<tag>``)


.. |downloads_ymp| image:: https://img.shields.io/conda/dn/bioconda/ymp.svg?style=flat
   :target: https://anaconda.org/bioconda/ymp
   :alt:   (downloads)
.. |docker_ymp| image:: https://quay.io/repository/biocontainers/ymp/status
   :target: https://quay.io/repository/biocontainers/ymp
.. _`ymp/tags`: https://quay.io/repository/biocontainers/ymp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ymp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ymp/README.html