:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretext-suite'
.. highlight: bash

pretext-suite
=============

.. conda:recipe:: pretext-suite
   :replaces_section_title:
   :noindex:

   Meta\-package for Pretext Hi\-C contact map tools.

   :homepage: https://github.com/wtsi-hpag/
   :license: MIT / MIT
   :recipe: /`pretext-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite/meta.yaml>`_

   A collection of the Pretext Hi\-C genome contact map tools. Developed by the High\-Performance Assembly Group\, Wellcome Sanger Institute\, UK.



.. conda:package:: pretext-suite

   |downloads_pretext-suite| |docker_pretext-suite|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on pretextgraph: 
   :depends on pretextmap: 
   :depends on pretextsnapshot: 

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

    pixi global install pretext-suite

to add into an existing workspace instead, run::

    pixi add pretext-suite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pretext-suite

Alternatively, to install into a new environment, run::

    conda create -n envname pretext-suite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pretext-suite:<tag>

(see `pretext-suite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pretext-suite| image:: https://img.shields.io/conda/dn/bioconda/pretext-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/pretext-suite
   :alt:   (downloads)
.. |docker_pretext-suite| image:: https://quay.io/repository/biocontainers/pretext-suite/status
   :target: https://quay.io/repository/biocontainers/pretext-suite
.. _`pretext-suite/tags`: https://quay.io/repository/biocontainers/pretext-suite?tab=tags


.. raw:: html

    <script>
        var package = "pretext-suite";
        var versions = ["0.0.2","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretext-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretext-suite/README.html