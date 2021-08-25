:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jgoslin'
.. highlight: bash

jgoslin
=======

.. conda:recipe:: jgoslin
   :replaces_section_title:
   :noindex:

   This project is a parser\, validator and normalizer for shorthand lipid names\, based on the Goslin project.

   :homepage: https://github.com/lifs-tools/jgoslin
   :license: APACHE / Apache License 2.0
   :recipe: /`jgoslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jgoslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jgoslin/meta.yaml>`_
   :links: biotools: :biotools:`jgoslin`, doi: :doi:`10.5281/zenodo.3842332`

   The Grammar of succinct lipid nomenclature project \(Goslin\) defines multiple grammers compatible with ANTLRv4 for different sources of shorthand lipid nomenclature. 
   This allows to generate parsers based on the defined grammars\, which provide immediate feedback whether a processed lipid shorthand notation string is compliant with a particular grammar\, or not. jGoslin uses the Goslin grammars and the generated parser to support the following general tasks. 1\) Facilitate the parsing of shorthand lipid names dialects. 2\) Provide a structural representation of the shorthand lipid after parsing. 3\) Use the structural representation to generate normalized names.



.. conda:package:: jgoslin

   |downloads_jgoslin| |docker_jgoslin|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends openjdk: ``>=11``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jgoslin

   and update with::

      conda update jgoslin

   or use the docker container::

      docker pull quay.io/biocontainers/jgoslin:<tag>

   (see `jgoslin/tags`_ for valid values for ``<tag>``)


.. |downloads_jgoslin| image:: https://img.shields.io/conda/dn/bioconda/jgoslin.svg?style=flat
   :target: https://anaconda.org/bioconda/jgoslin
   :alt:   (downloads)
.. |docker_jgoslin| image:: https://quay.io/repository/biocontainers/jgoslin/status
   :target: https://quay.io/repository/biocontainers/jgoslin
.. _`jgoslin/tags`: https://quay.io/repository/biocontainers/jgoslin?tab=tags


.. raw:: html

    <script>
        var package = "jgoslin";
        var versions = ["1.1.2","1.1.2"];
    </script>





Notes
-----
jgoslin is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"jgoslin \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jgoslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jgoslin/README.html