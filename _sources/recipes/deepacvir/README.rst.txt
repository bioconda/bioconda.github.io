:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepacvir'
.. highlight: bash

deepacvir
=========

.. conda:recipe:: deepacvir
   :replaces_section_title:
   :noindex:

   Detecting novel human viruses from DNA reads with reverse\-complement neural networks.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :developer docs: https://gitlab.com/JakubBartoszewicz/deepac-vir
   :license: MIT / MIT
   :recipe: /`deepacvir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir/meta.yaml>`_

   


.. conda:package:: deepacvir

   |downloads_deepacvir| |docker_deepacvir|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on deepac: ``>=0.11.0``
   :depends on numpy: ``>=1.17``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.22.1``
   :depends on tensorflow: ``>=2.1``

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

    pixi global install deepacvir

to add into an existing workspace instead, run::

    pixi add deepacvir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepacvir

Alternatively, to install into a new environment, run::

    conda create -n envname deepacvir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepacvir:<tag>

(see `deepacvir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepacvir| image:: https://img.shields.io/conda/dn/bioconda/deepacvir.svg?style=flat
   :target: https://anaconda.org/bioconda/deepacvir
   :alt:   (downloads)
.. |docker_deepacvir| image:: https://quay.io/repository/biocontainers/deepacvir/status
   :target: https://quay.io/repository/biocontainers/deepacvir
.. _`deepacvir/tags`: https://quay.io/repository/biocontainers/deepacvir?tab=tags


.. raw:: html

    <script>
        var package = "deepacvir";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepacvir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepacvir/README.html