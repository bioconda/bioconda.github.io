:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplift'
.. highlight: bash

deeplift
========

.. conda:recipe:: deeplift
   :replaces_section_title:
   :noindex:

   DeepLIFT \(Deep Learning Important FeaTures\)

   :homepage: https://github.com/kundajelab/deeplift
   :documentation: https://github.com/kundajelab/deeplift/blob/master/README.md
   
   :license: OTHER / MIT License
   :recipe: /`deeplift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift/meta.yaml>`_

   Algorithms for computing importance scores in deep neural networks.

   Implements the methods in \"Learning Important Features Through Propagating Activation Differences\" by Shrikumar\, Greenside \& Kundaje\, as well as other commonly\-used methods such as gradients\, guided backprop and integrated gradients. See https\:\/\/github.com\/kundajelab\/deeplift for documentation and FAQ.


.. conda:package:: deeplift

   |downloads_deeplift| |docker_deeplift|

   :versions:
      
      

      ``0.6.13.0-0``,  ``0.6.12.0-0``,  ``0.6.10.0-0``,  ``0.6.9.3-0``,  ``0.6.9.1-0``,  ``0.6.9.0-0``

      

   
   :depends numpy: ``>=1.9``
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install deeplift

   and update with::

      mamba update deeplift

  To create a new environment, run::

      mamba create --name myenvname deeplift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deeplift:<tag>

   (see `deeplift/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplift| image:: https://img.shields.io/conda/dn/bioconda/deeplift.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplift
   :alt:   (downloads)
.. |docker_deeplift| image:: https://quay.io/repository/biocontainers/deeplift/status
   :target: https://quay.io/repository/biocontainers/deeplift
.. _`deeplift/tags`: https://quay.io/repository/biocontainers/deeplift?tab=tags


.. raw:: html

    <script>
        var package = "deeplift";
        var versions = ["0.6.13.0","0.6.12.0","0.6.10.0","0.6.9.3","0.6.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplift/README.html