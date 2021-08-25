:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platypus-conquistador'
.. highlight: bash

platypus-conquistador
=====================

.. conda:recipe:: platypus-conquistador
   :replaces_section_title:
   :noindex:

   Platypus Conquistador\: Confirming specific taxonomic groups within your metagenomic samples.

   :homepage: https://github.com/biocore/Platypus-Conquistador
   :license: BSD / BSD-3-Clause
   :recipe: /`platypus-conquistador <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador/meta.yaml>`_

   


.. conda:package:: platypus-conquistador

   |downloads_platypus-conquistador| |docker_platypus-conquistador|

   :versions:
      
      

      ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends click: 
   :depends python: ``<3``
   :depends scikit-bio: ``>=0.2.1,<0.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install platypus-conquistador

   and update with::

      conda update platypus-conquistador

   or use the docker container::

      docker pull quay.io/biocontainers/platypus-conquistador:<tag>

   (see `platypus-conquistador/tags`_ for valid values for ``<tag>``)


.. |downloads_platypus-conquistador| image:: https://img.shields.io/conda/dn/bioconda/platypus-conquistador.svg?style=flat
   :target: https://anaconda.org/bioconda/platypus-conquistador
   :alt:   (downloads)
.. |docker_platypus-conquistador| image:: https://quay.io/repository/biocontainers/platypus-conquistador/status
   :target: https://quay.io/repository/biocontainers/platypus-conquistador
.. _`platypus-conquistador/tags`: https://quay.io/repository/biocontainers/platypus-conquistador?tab=tags


.. raw:: html

    <script>
        var package = "platypus-conquistador";
        var versions = ["0.9.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-conquistador/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-conquistador/README.html