:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imods'
.. highlight: bash

imods
=====

.. conda:recipe:: imods
   :replaces_section_title:
   :noindex:

   toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures.

   :homepage: https://chaconlab.org/multiscale-simulations/imod
   :license: OTHER / Copyright 2018 Chaconlab.org https://chaconlab.org/images/download/License.txt
   :recipe: /`imods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods/meta.yaml>`_

   iMOD is an versatile toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures. Vibrational analysis\, motion animations\, morphing trajectories and Monte\-Carlo simulations can be easily carried out at different scales of resolution using this toolkit.


.. conda:package:: imods

   |downloads_imods| |docker_imods|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imods

   and update with::

      conda update imods

   or use the docker container::

      docker pull quay.io/biocontainers/imods:<tag>

   (see `imods/tags`_ for valid values for ``<tag>``)


.. |downloads_imods| image:: https://img.shields.io/conda/dn/bioconda/imods.svg?style=flat
   :target: https://anaconda.org/bioconda/imods
   :alt:   (downloads)
.. |docker_imods| image:: https://quay.io/repository/biocontainers/imods/status
   :target: https://quay.io/repository/biocontainers/imods
.. _`imods/tags`: https://quay.io/repository/biocontainers/imods?tab=tags


.. raw:: html

    <script>
        var package = "imods";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imods/README.html