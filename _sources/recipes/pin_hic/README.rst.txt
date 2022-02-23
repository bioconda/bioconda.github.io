:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pin_hic'
.. highlight: bash

pin_hic
=======

.. conda:recipe:: pin_hic
   :replaces_section_title:
   :noindex:

   A Hi\-C scaffolding method

   :homepage: https://github.com/dfguan/pin_hic/
   :license: MIT
   :recipe: /`pin_hic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pin_hic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pin_hic/meta.yaml>`_

   


.. conda:package:: pin_hic

   |downloads_pin_hic| |docker_pin_hic|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pin_hic

   and update with::

      conda update pin_hic

   or use the docker container::

      docker pull quay.io/biocontainers/pin_hic:<tag>

   (see `pin_hic/tags`_ for valid values for ``<tag>``)


.. |downloads_pin_hic| image:: https://img.shields.io/conda/dn/bioconda/pin_hic.svg?style=flat
   :target: https://anaconda.org/bioconda/pin_hic
   :alt:   (downloads)
.. |docker_pin_hic| image:: https://quay.io/repository/biocontainers/pin_hic/status
   :target: https://quay.io/repository/biocontainers/pin_hic
.. _`pin_hic/tags`: https://quay.io/repository/biocontainers/pin_hic?tab=tags


.. raw:: html

    <script>
        var package = "pin_hic";
        var versions = ["3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pin_hic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pin_hic/README.html