:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastsimbac'
.. highlight: bash

fastsimbac
==========

.. conda:recipe:: fastsimbac
   :replaces_section_title:
   :noindex:

   Models bacterial recombination

   :homepage: https://bitbucket.org/nicofmay/fastsimbac/
   :license: GPL
   :recipe: /`fastsimbac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac/meta.yaml>`_

   


.. conda:package:: fastsimbac

   |downloads_fastsimbac| |docker_fastsimbac|

   :versions:
      
      

      ``1.0.1_bd3ad13d8f79-7``,  ``1.0.1_bd3ad13d8f79-6``,  ``1.0.1_bd3ad13d8f79-5``,  ``1.0.1_bd3ad13d8f79-4``,  ``1.0.1_bd3ad13d8f79-3``,  ``1.0.1_bd3ad13d8f79-2``,  ``1.0.1_bd3ad13d8f79-1``,  ``1.0.1_bd3ad13d8f79-0``

      

   
   :depends on boost: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install fastsimbac

to add into an existing workspace instead, run::

    pixi add fastsimbac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastsimbac

Alternatively, to install into a new environment, run::

    conda create -n envname fastsimbac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastsimbac:<tag>

(see `fastsimbac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastsimbac| image:: https://img.shields.io/conda/dn/bioconda/fastsimbac.svg?style=flat
   :target: https://anaconda.org/bioconda/fastsimbac
   :alt:   (downloads)
.. |docker_fastsimbac| image:: https://quay.io/repository/biocontainers/fastsimbac/status
   :target: https://quay.io/repository/biocontainers/fastsimbac
.. _`fastsimbac/tags`: https://quay.io/repository/biocontainers/fastsimbac?tab=tags


.. raw:: html

    <script>
        var package = "fastsimbac";
        var versions = ["1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastsimbac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastsimbac/README.html