:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'godmd'
.. highlight: bash

godmd
=====

.. conda:recipe:: godmd
   :replaces_section_title:
   :noindex:

   GOdMD Conformational Transitions with discrete Molecular Dynamics

   :homepage: http://mmb.irbbarcelona.org/gitlab/adam/GOdMD
   :license: APACHE / Apache Software License
   :recipe: /`godmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd/meta.yaml>`_

   GOdMD is a new method for determining pathways for conformational transitions in macromolecules based on the use of discrete molecular dynamics and biasing techniques based on a combination of essential dynamics and Maxwell\-Demon sampling techniques. The method can work with high efficiency at different levels of resolution\, including the atomistic one\, and can help to define initial pathways for further exploration by means of more accurate atomistic molecular dynamics simulations.


.. conda:package:: godmd

   |downloads_godmd| |docker_godmd|

   :versions:
      
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python_abi: ``3.9.* *_cp39``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install godmd

   and update with::

      mamba update godmd

  To create a new environment, run::

      mamba create --name myenvname godmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/godmd:<tag>

   (see `godmd/tags`_ for valid values for ``<tag>``)


.. |downloads_godmd| image:: https://img.shields.io/conda/dn/bioconda/godmd.svg?style=flat
   :target: https://anaconda.org/bioconda/godmd
   :alt:   (downloads)
.. |docker_godmd| image:: https://quay.io/repository/biocontainers/godmd/status
   :target: https://quay.io/repository/biocontainers/godmd
.. _`godmd/tags`: https://quay.io/repository/biocontainers/godmd?tab=tags


.. raw:: html

    <script>
        var package = "godmd";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/godmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/godmd/README.html