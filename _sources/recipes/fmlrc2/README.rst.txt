:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmlrc2'
.. highlight: bash

fmlrc2
======

.. conda:recipe:: fmlrc2
   :replaces_section_title:
   :noindex:

   A rust implementation of fmlrc with faster run times.

   :homepage: https://github.com/HudsonAlpha/rust-fmlrc
   :license: MIT OR Apache-2.0
   :recipe: /`fmlrc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc2/meta.yaml>`_

   


.. conda:package:: fmlrc2

   |downloads_fmlrc2| |docker_fmlrc2|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends libopenblas: ``>=0.3.18,<1.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends starcode: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fmlrc2

   and update with::

      conda update fmlrc2

   or use the docker container::

      docker pull quay.io/biocontainers/fmlrc2:<tag>

   (see `fmlrc2/tags`_ for valid values for ``<tag>``)


.. |downloads_fmlrc2| image:: https://img.shields.io/conda/dn/bioconda/fmlrc2.svg?style=flat
   :target: https://anaconda.org/bioconda/fmlrc2
   :alt:   (downloads)
.. |docker_fmlrc2| image:: https://quay.io/repository/biocontainers/fmlrc2/status
   :target: https://quay.io/repository/biocontainers/fmlrc2
.. _`fmlrc2/tags`: https://quay.io/repository/biocontainers/fmlrc2?tab=tags


.. raw:: html

    <script>
        var package = "fmlrc2";
        var versions = ["0.1.5","0.1.5","0.1.4","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmlrc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmlrc2/README.html