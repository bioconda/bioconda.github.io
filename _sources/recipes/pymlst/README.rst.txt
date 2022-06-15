:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymlst'
.. highlight: bash

pymlst
======

.. conda:recipe:: pymlst
   :replaces_section_title:
   :noindex:

   python Mlst Local Search Tool

   :homepage: https://github.com/bvalot/pyMLST.git
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pymlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst/meta.yaml>`_

   


.. conda:package:: pymlst

   |downloads_pymlst| |docker_pymlst|

   :versions:
      
      

      ``2.1.3-0``,  ``2.1.2-0``

      

   
   :depends alembic: ``>=1.6``
   :depends beautifulsoup4: ``>=4.9``
   :depends biopython: ``>=1.78``
   :depends click: ``>=7.1``
   :depends decorator: ``>=4.4``
   :depends kma: 
   :depends mafft: 
   :depends networkx: ``>=2.5``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.2``
   :depends pytest: ``>=6.2``
   :depends python: 
   :depends questionary: ``>=1.9``
   :depends requests: ``>=2.23``
   :depends setuptools: ``>=44.0``
   :depends sqlalchemy: ``>=1.4``
   :depends ucsc-blat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymlst

   and update with::

      conda update pymlst

   or use the docker container::

      docker pull quay.io/biocontainers/pymlst:<tag>

   (see `pymlst/tags`_ for valid values for ``<tag>``)


.. |downloads_pymlst| image:: https://img.shields.io/conda/dn/bioconda/pymlst.svg?style=flat
   :target: https://anaconda.org/bioconda/pymlst
   :alt:   (downloads)
.. |docker_pymlst| image:: https://quay.io/repository/biocontainers/pymlst/status
   :target: https://quay.io/repository/biocontainers/pymlst
.. _`pymlst/tags`: https://quay.io/repository/biocontainers/pymlst?tab=tags


.. raw:: html

    <script>
        var package = "pymlst";
        var versions = ["2.1.3","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymlst/README.html