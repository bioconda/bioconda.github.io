:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplift'
.. highlight: bash

deeplift
========

.. conda:recipe:: deeplift
   :replaces_section_title:

   DeepLIFT \(Deep Learning Important FeaTures\)

   :homepage: https://github.com/kundajelab/deeplift
   :documentation: https://github.com/kundajelab/deeplift/blob/master/README.md
   
   :license: OTHER / MIT License
   :recipe: /`deeplift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift/meta.yaml>`_

   Algorithms for computing importance scores in deep neural networks.

   Implements the methods in \"Learning Important Features Through Propagating Activation Differences\" by Shrikumar\, Greenside \& Kundaje\, as well as other commonly\-used methods such as gradients\, guided backprop and integrated gradients. See https\:\/\/github.com\/kundajelab\/deeplift for documentation and FAQ.


.. conda:package:: deeplift

   |downloads_deeplift| |docker_deeplift|

   :versions: 0.6.9.0-0
   
   :depends numpy: >=1.9
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeplift

   and update with::

      conda update deeplift

   or use the docker container::

      docker pull quay.io/biocontainers/deeplift:<tag>

   (see `deeplift/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplift| image:: https://img.shields.io/conda/dn/bioconda/deeplift.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplift
   :alt:   (downloads)
.. |docker_deeplift| image:: https://quay.io/repository/biocontainers/deeplift/status
   :target: https://quay.io/repository/biocontainers/deeplift
.. _`deeplift/tags`: https://quay.io/repository/biocontainers/deeplift?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplift/README.html