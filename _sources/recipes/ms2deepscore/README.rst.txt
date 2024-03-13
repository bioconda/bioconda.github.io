:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2deepscore'
.. highlight: bash

ms2deepscore
============

.. conda:recipe:: ms2deepscore
   :replaces_section_title:
   :noindex:

   Deep learning similarity measure for comparing MS\/MS spectra with respect to their chemical similarity

   :homepage: https://github.com/matchms/ms2deepscore
   :license: APACHE / Apache-2.0
   :recipe: /`ms2deepscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2deepscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2deepscore/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321-021-00558-4`, biotools: :biotools:`ms2deepscore`

   ms2deepscore provides a Siamese neural network that is trained to predict
   molecular structural similarities \(Tanimoto scores\) from pairs of mass
   spectrometry spectra.



.. conda:package:: ms2deepscore

   |downloads_ms2deepscore| |docker_ms2deepscore|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0.1-0``

      

   
   :depends matchms: ``>=0.14.0``
   :depends numba: 
   :depends numpy: ``>=1.20.3``
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends tensorflow: ``<2.14``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ms2deepscore

   and update with::

      mamba update ms2deepscore

  To create a new environment, run::

      mamba create --name myenvname ms2deepscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms2deepscore:<tag>

   (see `ms2deepscore/tags`_ for valid values for ``<tag>``)


.. |downloads_ms2deepscore| image:: https://img.shields.io/conda/dn/bioconda/ms2deepscore.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2deepscore
   :alt:   (downloads)
.. |docker_ms2deepscore| image:: https://quay.io/repository/biocontainers/ms2deepscore/status
   :target: https://quay.io/repository/biocontainers/ms2deepscore
.. _`ms2deepscore/tags`: https://quay.io/repository/biocontainers/ms2deepscore?tab=tags


.. raw:: html

    <script>
        var package = "ms2deepscore";
        var versions = ["1.0.0","0.5.0","0.4.0","0.3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2deepscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2deepscore/README.html