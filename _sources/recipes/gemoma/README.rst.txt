:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemoma'
.. highlight: bash

gemoma
======

.. conda:recipe:: gemoma
   :replaces_section_title:
   :noindex:

   Gene Model Mapper \(GeMoMa\) is a homology\-based gene prediction program.
   GeMoMa uses the annotation of protein\-coding genes in a reference genome to infer the annotation of protein\-coding genes in a target genome.
   Thereby\, GeMoMa utilizes amino acid sequence and intron position conservation.
   In addition\, GeMoMa allows to incorporate RNA\-seq evidence for splice site prediction.


   :homepage: http://www.jstacs.de/index.php/GeMoMa
   :license: GPL3
   :recipe: /`gemoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw092`, doi: :doi:`10.1186/s12859-018-2203-5`

   


.. conda:package:: gemoma

   |downloads_gemoma| |docker_gemoma|

   :versions:
      
      

      ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends blast: ``>=2.2.31``
   :depends mmseqs2: ``>=8.fac81``
   :depends openjdk: ``>=8``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gemoma

   and update with::

      conda update gemoma

   or use the docker container::

      docker pull quay.io/biocontainers/gemoma:<tag>

   (see `gemoma/tags`_ for valid values for ``<tag>``)


.. |downloads_gemoma| image:: https://img.shields.io/conda/dn/bioconda/gemoma.svg?style=flat
   :target: https://anaconda.org/bioconda/gemoma
   :alt:   (downloads)
.. |docker_gemoma| image:: https://quay.io/repository/biocontainers/gemoma/status
   :target: https://quay.io/repository/biocontainers/gemoma
.. _`gemoma/tags`: https://quay.io/repository/biocontainers/gemoma?tab=tags






Notes
-----
GeMoMa is Java program that comes with a custom wrapper python script. By default
\"\-Xms1g \-Xmx2g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemoma/README.html