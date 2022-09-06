:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polypolish'
.. highlight: bash

polypolish
==========

.. conda:recipe:: polypolish
   :replaces_section_title:
   :noindex:

   Polishing genome assemblies with short reads.

   :homepage: https://github.com/rrwick/Polypolish
   :license: GPL / GPLv3
   :recipe: /`polypolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polypolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polypolish/meta.yaml>`_

   


.. conda:package:: polypolish

   |downloads_polypolish| |docker_polypolish|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install polypolish

   and update with::

      conda update polypolish

   or use the docker container::

      docker pull quay.io/biocontainers/polypolish:<tag>

   (see `polypolish/tags`_ for valid values for ``<tag>``)


.. |downloads_polypolish| image:: https://img.shields.io/conda/dn/bioconda/polypolish.svg?style=flat
   :target: https://anaconda.org/bioconda/polypolish
   :alt:   (downloads)
.. |docker_polypolish| image:: https://quay.io/repository/biocontainers/polypolish/status
   :target: https://quay.io/repository/biocontainers/polypolish
.. _`polypolish/tags`: https://quay.io/repository/biocontainers/polypolish?tab=tags


.. raw:: html

    <script>
        var package = "polypolish";
        var versions = ["0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polypolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polypolish/README.html