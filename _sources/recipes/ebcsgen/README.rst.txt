:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebcsgen'
.. highlight: bash

ebcsgen
=======

.. conda:recipe:: ebcsgen
   :replaces_section_title:
   :noindex:

   eBSCgen is a tool for development and analysis of models written in Biochemical Space Language \(BCSL\).

   :homepage: https://github.com/sybila/eBCSgen
   :documentation: https://ebcsgen.readthedocs.io/
   
   :license: MIT
   :recipe: /`ebcsgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebcsgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebcsgen/meta.yaml>`_

   


.. conda:package:: ebcsgen

   |downloads_ebcsgen| |docker_ebcsgen|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``

      

   
   :depends lark: 
   :depends lark-parser: 
   :depends numpy: 
   :depends pandas: 
   :depends pymodelchecking: 
   :depends pyparsing: 
   :depends python: ``>=3.9``
   :depends python-libsbml: 
   :depends regex: 
   :depends requests: 
   :depends scipy: 
   :depends sortedcontainers: 
   :depends sympy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ebcsgen

   and update with::

      conda update ebcsgen

   or use the docker container::

      docker pull quay.io/biocontainers/ebcsgen:<tag>

   (see `ebcsgen/tags`_ for valid values for ``<tag>``)


.. |downloads_ebcsgen| image:: https://img.shields.io/conda/dn/bioconda/ebcsgen.svg?style=flat
   :target: https://anaconda.org/bioconda/ebcsgen
   :alt:   (downloads)
.. |docker_ebcsgen| image:: https://quay.io/repository/biocontainers/ebcsgen/status
   :target: https://quay.io/repository/biocontainers/ebcsgen
.. _`ebcsgen/tags`: https://quay.io/repository/biocontainers/ebcsgen?tab=tags


.. raw:: html

    <script>
        var package = "ebcsgen";
        var versions = ["1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebcsgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebcsgen/README.html