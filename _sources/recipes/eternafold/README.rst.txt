:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eternafold'
.. highlight: bash

eternafold
==========

.. conda:recipe:: eternafold
   :replaces_section_title:
   :noindex:

   RNA structure prediction algorithm improved through crowdsourced training data.

   :homepage: https://github.com/eternagame/EternaFold
   :documentation: https://eternagame.github.io/EternaFold
   
   :license: BSD / BSD-3-Clause
   :recipe: /`eternafold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eternafold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eternafold/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01605-0`

   EternaFold performs multitask learning to improve RNA structure prediction. 
   Its training tasks include 1\) predicting single structures\, 2\) maximizing the 
   likelihood of structure probing data\, and 3\) predicting experimentally\-measured 
   affinities of RNA molecules to proteins and small molecules. Described in the paper 
   https\:\/\/www.nature.com\/articles\/s41592\-022\-01605\-0



.. conda:package:: eternafold

   |downloads_eternafold| |docker_eternafold|

   :versions:
      
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openmpi-mpicxx: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install eternafold

to add into an existing workspace instead, run::

    pixi add eternafold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eternafold

Alternatively, to install into a new environment, run::

    conda create -n envname eternafold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eternafold:<tag>

(see `eternafold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eternafold| image:: https://img.shields.io/conda/dn/bioconda/eternafold.svg?style=flat
   :target: https://anaconda.org/bioconda/eternafold
   :alt:   (downloads)
.. |docker_eternafold| image:: https://quay.io/repository/biocontainers/eternafold/status
   :target: https://quay.io/repository/biocontainers/eternafold
.. _`eternafold/tags`: https://quay.io/repository/biocontainers/eternafold?tab=tags


.. raw:: html

    <script>
        var package = "eternafold";
        var versions = ["1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eternafold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eternafold/README.html