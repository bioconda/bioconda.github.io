:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectacle'
.. highlight: bash

spectacle
=========

.. conda:recipe:: spectacle
   :replaces_section_title:
   :noindex:

   This software implements a spectral learning algorithm for hidden Markov models for epigenomic data. Please see our paper for further details\: Song\, J and Chen\, K. C. Spectacle\: fast chromatin state annotation using spectral learning. Genome Biology\, 16\:33\, 2015. http\:\/\/genomebiology.com\/2015\/16\/1\/33

   :homepage: https://github.com/jiminsong/Spectacle
   :license: GPL / GPL-3.0
   :recipe: /`spectacle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle/meta.yaml>`_

   


.. conda:package:: spectacle

   |downloads_spectacle| |docker_spectacle|

   :versions:
      
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends on numpy: 
   :depends on openjdk: 
   :depends on python: 
   :depends on scipy: 

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

    pixi global install spectacle

to add into an existing workspace instead, run::

    pixi add spectacle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectacle

Alternatively, to install into a new environment, run::

    conda create -n envname spectacle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectacle:<tag>

(see `spectacle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectacle| image:: https://img.shields.io/conda/dn/bioconda/spectacle.svg?style=flat
   :target: https://anaconda.org/bioconda/spectacle
   :alt:   (downloads)
.. |docker_spectacle| image:: https://quay.io/repository/biocontainers/spectacle/status
   :target: https://quay.io/repository/biocontainers/spectacle
.. _`spectacle/tags`: https://quay.io/repository/biocontainers/spectacle?tab=tags


.. raw:: html

    <script>
        var package = "spectacle";
        var versions = ["1.4","1.4","1.4","1.4"];
    </script>





Notes
-----
The Spectacle github repo weighs in at around 500MB\, a large portion of which is data files. These have been removed from the conda recipe\, but a script \(download\_spectacle\_data.sh\) has been included here which will download those files from github.  In addition\, a wrapper script \`Spectacle.sh\` has been included in this recipe and should be used when calling the program.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectacle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectacle/README.html