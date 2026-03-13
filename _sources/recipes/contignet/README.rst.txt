:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contignet'
.. highlight: bash

contignet
=========

.. conda:recipe:: contignet
   :replaces_section_title:
   :noindex:

   ContigNet\, a deep learning based phage\-host interaction prediction tool

   :homepage: https://github.com/tianqitang1/ContigNet
   :license: OTHER / USC-RL v1.0
   :recipe: /`contignet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac239`

   


.. conda:package:: contignet

   |downloads_contignet| |docker_contignet|

   :versions:
      
      

      ``1.0.1.post3-0``

      

   
   :depends on biopython: 
   :depends on ete3: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on pytorch: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tensorboard: 
   :depends on tqdm: 

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

    pixi global install contignet

to add into an existing workspace instead, run::

    pixi add contignet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install contignet

Alternatively, to install into a new environment, run::

    conda create -n envname contignet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/contignet:<tag>

(see `contignet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_contignet| image:: https://img.shields.io/conda/dn/bioconda/contignet.svg?style=flat
   :target: https://anaconda.org/bioconda/contignet
   :alt:   (downloads)
.. |docker_contignet| image:: https://quay.io/repository/biocontainers/contignet/status
   :target: https://quay.io/repository/biocontainers/contignet
.. _`contignet/tags`: https://quay.io/repository/biocontainers/contignet?tab=tags


.. raw:: html

    <script>
        var package = "contignet";
        var versions = ["1.0.1.post3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contignet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contignet/README.html