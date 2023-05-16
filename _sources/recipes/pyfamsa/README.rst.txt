:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfamsa'
.. highlight: bash

pyfamsa
=======

.. conda:recipe:: pyfamsa
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to FAMSA\, an algorithm for ultra\-scale multiple sequence alignments.

   :homepage: https://github.com/althonos/pyfamsa
   :documentation: https://pyfamsa.readthedocs.org/
   
   :license: GPL / GPL-3
   :recipe: /`pyfamsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfamsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfamsa/meta.yaml>`_

   


.. conda:package:: pyfamsa

   |downloads_pyfamsa| |docker_pyfamsa|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfamsa

   and update with::

      conda update pyfamsa

   or use the docker container::

      docker pull quay.io/biocontainers/pyfamsa:<tag>

   (see `pyfamsa/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfamsa| image:: https://img.shields.io/conda/dn/bioconda/pyfamsa.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfamsa
   :alt:   (downloads)
.. |docker_pyfamsa| image:: https://quay.io/repository/biocontainers/pyfamsa/status
   :target: https://quay.io/repository/biocontainers/pyfamsa
.. _`pyfamsa/tags`: https://quay.io/repository/biocontainers/pyfamsa?tab=tags


.. raw:: html

    <script>
        var package = "pyfamsa";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfamsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfamsa/README.html