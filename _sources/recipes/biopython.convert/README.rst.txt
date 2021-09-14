:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopython.convert'
.. highlight: bash

biopython.convert
=================

.. conda:recipe:: biopython.convert
   :replaces_section_title:
   :noindex:

   Interconvert various file formats supported by BioPython

   :homepage: https://github.com/brinkmanlab/BioPython-Convert
   :license: MIT / MIT
   :recipe: /`biopython.convert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopython.convert/meta.yaml>`_

   


.. conda:package:: biopython.convert

   |downloads_biopython.convert| |docker_biopython.convert|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.73``
   :depends gffutils: ``>=0.9``
   :depends jmespath: ``>=0.9.4``
   :depends pbr: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopython.convert

   and update with::

      conda update biopython.convert

   or use the docker container::

      docker pull quay.io/biocontainers/biopython.convert:<tag>

   (see `biopython.convert/tags`_ for valid values for ``<tag>``)


.. |downloads_biopython.convert| image:: https://img.shields.io/conda/dn/bioconda/biopython.convert.svg?style=flat
   :target: https://anaconda.org/bioconda/biopython.convert
   :alt:   (downloads)
.. |docker_biopython.convert| image:: https://quay.io/repository/biocontainers/biopython.convert/status
   :target: https://quay.io/repository/biocontainers/biopython.convert
.. _`biopython.convert/tags`: https://quay.io/repository/biocontainers/biopython.convert?tab=tags


.. raw:: html

    <script>
        var package = "biopython.convert";
        var versions = ["1.3.1","1.2.0","1.1.0","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopython.convert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopython.convert/README.html