:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vartrix'
.. highlight: bash

vartrix
=======

.. conda:recipe:: vartrix
   :replaces_section_title:
   :noindex:

   VarTrix is a software tool for extracting single cell variant information
   from 10x Genomics single cell data.

   :homepage: https://github.com/10XGenomics/vartrix
   :license: MIT
   :recipe: /`vartrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartrix/meta.yaml>`_

   


.. conda:package:: vartrix

   |downloads_vartrix| |docker_vartrix|

   :versions:
      
      

      ``1.1.22-1``,  ``1.1.22-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vartrix

   and update with::

      conda update vartrix

   or use the docker container::

      docker pull quay.io/biocontainers/vartrix:<tag>

   (see `vartrix/tags`_ for valid values for ``<tag>``)


.. |downloads_vartrix| image:: https://img.shields.io/conda/dn/bioconda/vartrix.svg?style=flat
   :target: https://anaconda.org/bioconda/vartrix
   :alt:   (downloads)
.. |docker_vartrix| image:: https://quay.io/repository/biocontainers/vartrix/status
   :target: https://quay.io/repository/biocontainers/vartrix
.. _`vartrix/tags`: https://quay.io/repository/biocontainers/vartrix?tab=tags


.. raw:: html

    <script>
        var package = "vartrix";
        var versions = ["1.1.22","1.1.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vartrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vartrix/README.html