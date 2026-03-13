:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chiron'
.. highlight: bash

chiron
======

.. conda:recipe:: chiron
   :replaces_section_title:
   :noindex:

   A deep neural network basecaller for nanopore sequencing.

   :homepage: https://github.com/haotianteng/chiron
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`chiron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giy037`, biotools: :biotools:`Chiron`

   


.. conda:package:: chiron

   |downloads_chiron| |docker_chiron|

   :versions:
      
      

      ``0.6.1.1-0``,  ``0.6.1-0``,  ``0.4.2.1-1``,  ``0.4.2.1-0``

      

   
   :depends on h5py: ``>=2.7.0``
   :depends on mappy: ``>=2.10.0``
   :depends on numpy: ``>=1.13.3``
   :depends on python: ``2.7.*``
   :depends on statsmodels: ``>=0.8.0``
   :depends on tensorflow: ``>=1.3.0``
   :depends on tqdm: ``>=4.23.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install chiron

to add into an existing workspace instead, run::

    pixi add chiron

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chiron

Alternatively, to install into a new environment, run::

    conda create -n envname chiron

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chiron:<tag>

(see `chiron/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chiron| image:: https://img.shields.io/conda/dn/bioconda/chiron.svg?style=flat
   :target: https://anaconda.org/bioconda/chiron
   :alt:   (downloads)
.. |docker_chiron| image:: https://quay.io/repository/biocontainers/chiron/status
   :target: https://quay.io/repository/biocontainers/chiron
.. _`chiron/tags`: https://quay.io/repository/biocontainers/chiron?tab=tags


.. raw:: html

    <script>
        var package = "chiron";
        var versions = ["0.6.1.1","0.6.1","0.4.2.1","0.4.2.1"];
    </script>





Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chiron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chiron/README.html