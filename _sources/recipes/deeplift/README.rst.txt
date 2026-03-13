:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplift'
.. highlight: bash

deeplift
========

.. conda:recipe:: deeplift
   :replaces_section_title:
   :noindex:

   DeepLIFT \(Deep Learning Important FeaTures\)

   :homepage: https://github.com/kundajelab/deeplift
   :documentation: https://github.com/kundajelab/deeplift/blob/master/README.md
   
   :license: OTHER / MIT License
   :recipe: /`deeplift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplift/meta.yaml>`_

   Algorithms for computing importance scores in deep neural networks.

   Implements the methods in \"Learning Important Features Through Propagating Activation Differences\" by Shrikumar\, Greenside \& Kundaje\, as well as other commonly\-used methods such as gradients\, guided backprop and integrated gradients. See https\:\/\/github.com\/kundajelab\/deeplift for documentation and FAQ.


.. conda:package:: deeplift

   |downloads_deeplift| |docker_deeplift|

   :versions:
      
      

      ``0.6.13.0-0``,  ``0.6.12.0-0``,  ``0.6.10.0-0``,  ``0.6.9.3-0``,  ``0.6.9.1-0``,  ``0.6.9.0-0``

      

   
   :depends on numpy: ``>=1.9``
   :depends on python: 

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

    pixi global install deeplift

to add into an existing workspace instead, run::

    pixi add deeplift

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deeplift

Alternatively, to install into a new environment, run::

    conda create -n envname deeplift

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deeplift:<tag>

(see `deeplift/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deeplift| image:: https://img.shields.io/conda/dn/bioconda/deeplift.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplift
   :alt:   (downloads)
.. |docker_deeplift| image:: https://quay.io/repository/biocontainers/deeplift/status
   :target: https://quay.io/repository/biocontainers/deeplift
.. _`deeplift/tags`: https://quay.io/repository/biocontainers/deeplift?tab=tags


.. raw:: html

    <script>
        var package = "deeplift";
        var versions = ["0.6.13.0","0.6.12.0","0.6.10.0","0.6.9.3","0.6.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplift/README.html