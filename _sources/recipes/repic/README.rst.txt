:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repic'
.. highlight: bash

repic
=====

.. conda:recipe:: repic
   :replaces_section_title:
   :noindex:

   REPIC \- an ensemble learning approach to cryo\-EM particle picking.

   :homepage: https://github.com/ccameron/REPIC
   :documentation: https://repic.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`repic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic/meta.yaml>`_

   REliable PIcking by Consensus \(REPIC\) is an ensemble learning approach to cryogenic\-electron microscopy \(cryo\-EM\) particle picking. It identifies particles common to multiple picked particle sets \(i.e.\, consensus particles\) using graph theory and integer linear programming \(ILP\). Picked particle sets may be found by a human specialist \(manual\)\, template matching\, mathematical function \(e.g.\, RELION\'s Laplacian\-of\-Gaussian auto\-picking\)\, or machine\-learning method. REPIC expects particle sets to be in BOX file format \(\*.box\) where each particle has coordinates\, a detection box size \(in pixels\)\, and \(optional\) a score \[0\-1\].


.. conda:package:: repic

   |downloads_repic| |docker_repic|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.2.2``
   :depends mrcfile: ``>=1.4.3``
   :depends networkx: ``>=2.8.4``
   :depends numpy: ``>=1.24.2``
   :depends pandas: 
   :depends python: ``>=3.8.16``
   :depends scipy: ``>=1.10.0``
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

      mamba install repic

   and update with::

      mamba update repic

  To create a new environment, run::

      mamba create --name myenvname repic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repic:<tag>

   (see `repic/tags`_ for valid values for ``<tag>``)


.. |downloads_repic| image:: https://img.shields.io/conda/dn/bioconda/repic.svg?style=flat
   :target: https://anaconda.org/bioconda/repic
   :alt:   (downloads)
.. |docker_repic| image:: https://quay.io/repository/biocontainers/repic/status
   :target: https://quay.io/repository/biocontainers/repic
.. _`repic/tags`: https://quay.io/repository/biocontainers/repic?tab=tags


.. raw:: html

    <script>
        var package = "repic";
        var versions = ["0.2.1","0.2.0","0.1.0","0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repic/README.html