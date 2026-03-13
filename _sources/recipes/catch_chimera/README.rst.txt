:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'catch_chimera'
.. highlight: bash

catch_chimera
=============

.. conda:recipe:: catch_chimera
   :replaces_section_title:
   :noindex:

   CATCh is an ensemble classifier for chimera detection in 16S rRNA sequencing studies. The present bioconda recipe installs the \'CATCh\_v1.run\' binary\, as suggested on authors website.

   :homepage: https://science.sckcen.be/en/Institutes/EHS/MCB/MIC/Bioinformatics/CATCh
   :license: GPL3
   :recipe: /`catch_chimera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch_chimera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch_chimera/meta.yaml>`_

   


.. conda:package:: catch_chimera

   |downloads_catch_chimera| |docker_catch_chimera|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-decipher: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install catch_chimera

to add into an existing workspace instead, run::

    pixi add catch_chimera

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install catch_chimera

Alternatively, to install into a new environment, run::

    conda create -n envname catch_chimera

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/catch_chimera:<tag>

(see `catch_chimera/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_catch_chimera| image:: https://img.shields.io/conda/dn/bioconda/catch_chimera.svg?style=flat
   :target: https://anaconda.org/bioconda/catch_chimera
   :alt:   (downloads)
.. |docker_catch_chimera| image:: https://quay.io/repository/biocontainers/catch_chimera/status
   :target: https://quay.io/repository/biocontainers/catch_chimera
.. _`catch_chimera/tags`: https://quay.io/repository/biocontainers/catch_chimera?tab=tags


.. raw:: html

    <script>
        var package = "catch_chimera";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catch_chimera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catch_chimera/README.html