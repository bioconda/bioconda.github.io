:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variant_tools'
.. highlight: bash

variant_tools
=============

.. conda:recipe:: variant_tools
   :replaces_section_title:
   :noindex:

   Integrated annotation and analysis of next gen sequencing data

   :homepage: https://github.com/vatlab/varianttools
   :license: GNU General Public License (GPL)
   :recipe: /`variant_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant_tools/meta.yaml>`_

   


.. conda:package:: variant_tools

   |downloads_variant_tools| |docker_variant_tools|

   :versions:
      
      

      ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.9-0``,  ``3.0.8-0``

      

   
   :depends blosc: ``>=1.20.0,<2.0a0``
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: 
   :depends pycurl: 
   :depends pytables: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyzmq: 
   :depends scipy: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install variant_tools

   and update with::

      conda update variant_tools

   or use the docker container::

      docker pull quay.io/biocontainers/variant_tools:<tag>

   (see `variant_tools/tags`_ for valid values for ``<tag>``)


.. |downloads_variant_tools| image:: https://img.shields.io/conda/dn/bioconda/variant_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/variant_tools
   :alt:   (downloads)
.. |docker_variant_tools| image:: https://quay.io/repository/biocontainers/variant_tools/status
   :target: https://quay.io/repository/biocontainers/variant_tools
.. _`variant_tools/tags`: https://quay.io/repository/biocontainers/variant_tools?tab=tags


.. raw:: html

    <script>
        var package = "variant_tools";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variant_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variant_tools/README.html