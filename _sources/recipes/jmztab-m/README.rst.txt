:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jmztab-m'
.. highlight: bash

jmztab-m
========

.. conda:recipe:: jmztab-m
   :replaces_section_title:

   This project is the reference reader\, writer and validator implementation for mzTab for metabolomics 2.0\+.

   :homepage: https://github.com/lifs-tools/jmztab-m
   :license: APACHE / Apache License 2.0
   :recipe: /`jmztab-m <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jmztab-m>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jmztab-m/meta.yaml>`_
   :links: biotools: :biotools:`jmztab-m`, doi: :doi:`10.5281/zenodo.3362151`

   mzTab\-M is intended as a reporting standard for quantitative results from
   metabolomics\/lipodomics approaches. This format is further intended to
   provide local LIMS systems as well as MS metabolomics repositories a 
   simple way to share and combine basic information. mzTab\-M has been
   developed with a view to support the following general tasks. Facilitate 
   the sharing of final experimental results\, especially with researchers 
   outside the field of metabolomics. Export of results to external software\,
   including programs such as Microsoft Excel and Open Office Spreadsheet
   and statistical software \/ coding languages such as R. Act as an output
   format of \(web\-\) services that report MS\-based results and thus can 
   produce standardized result pages. Be able to link to the external 
   experimental evidence e.g. by referencing back to mzML files.



.. conda:package:: jmztab-m

   |downloads_jmztab-m| |docker_jmztab-m|

   :versions: 1.0.4-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jmztab-m

   and update with::

      conda update jmztab-m

   or use the docker container::

      docker pull quay.io/biocontainers/jmztab-m:<tag>

   (see `jmztab-m/tags`_ for valid values for ``<tag>``)


.. |downloads_jmztab-m| image:: https://img.shields.io/conda/dn/bioconda/jmztab-m.svg?style=flat
   :target: https://anaconda.org/bioconda/jmztab-m
   :alt:   (downloads)
.. |docker_jmztab-m| image:: https://quay.io/repository/biocontainers/jmztab-m/status
   :target: https://quay.io/repository/biocontainers/jmztab-m
.. _`jmztab-m/tags`: https://quay.io/repository/biocontainers/jmztab-m?tab=tags






Notes
-----
jmzTab\-M is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"jmztab\-m \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jmztab-m/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jmztab-m/README.html