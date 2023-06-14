:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vamos'
.. highlight: bash

vamos
=====

.. conda:recipe:: vamos
   :replaces_section_title:
   :noindex:

   VNTR annotation using efficient motif selection

   :homepage: https://github.com/ChaissonLab/vamos
   :license: USC-RL v1.0
   :recipe: /`vamos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamos/meta.yaml>`_

   


.. conda:package:: vamos

   |downloads_vamos| |docker_vamos|

   :versions:
      
      

      ``1.2.6-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vamos

   and update with::

      conda update vamos

   or use the docker container::

      docker pull quay.io/biocontainers/vamos:<tag>

   (see `vamos/tags`_ for valid values for ``<tag>``)


.. |downloads_vamos| image:: https://img.shields.io/conda/dn/bioconda/vamos.svg?style=flat
   :target: https://anaconda.org/bioconda/vamos
   :alt:   (downloads)
.. |docker_vamos| image:: https://quay.io/repository/biocontainers/vamos/status
   :target: https://quay.io/repository/biocontainers/vamos
.. _`vamos/tags`: https://quay.io/repository/biocontainers/vamos?tab=tags


.. raw:: html

    <script>
        var package = "vamos";
        var versions = ["1.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vamos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vamos/README.html