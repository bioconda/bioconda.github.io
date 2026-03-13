:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dawg'
.. highlight: bash

dawg
====

.. conda:recipe:: dawg
   :replaces_section_title:
   :noindex:

   DNA Assembly with Gaps \(Dawg\) is an application designed to simulate the evolution of recombinant DNA sequences in continuous time based on the robust general time reversible model with gamma and invariant rate heterogeneity and a novel length\-dependent model of gap formation.

   :homepage: https://github.com/reedacartwright/dawg
   :license: GPL-2
   :recipe: /`dawg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg/meta.yaml>`_

   


.. conda:package:: dawg

   |downloads_dawg| |docker_dawg|

   :versions:
      
      

      ``2.0.beta1-8``,  ``2.0.beta1-7``,  ``2.0.beta1-6``,  ``2.0.beta1-5``,  ``2.0.beta1-4``,  ``2.0.beta1-3``,  ``2.0.beta1-2``,  ``2.0.beta1-1``,  ``2.0.beta1-0``

      

   
   :depends on boost-cpp: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcxx: ``>=16``

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

    pixi global install dawg

to add into an existing workspace instead, run::

    pixi add dawg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dawg

Alternatively, to install into a new environment, run::

    conda create -n envname dawg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dawg:<tag>

(see `dawg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dawg| image:: https://img.shields.io/conda/dn/bioconda/dawg.svg?style=flat
   :target: https://anaconda.org/bioconda/dawg
   :alt:   (downloads)
.. |docker_dawg| image:: https://quay.io/repository/biocontainers/dawg/status
   :target: https://quay.io/repository/biocontainers/dawg
.. _`dawg/tags`: https://quay.io/repository/biocontainers/dawg?tab=tags


.. raw:: html

    <script>
        var package = "dawg";
        var versions = ["2.0.beta1","2.0.beta1","2.0.beta1","2.0.beta1","2.0.beta1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dawg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dawg/README.html