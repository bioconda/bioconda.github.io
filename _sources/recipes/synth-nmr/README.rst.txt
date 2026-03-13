:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synth-nmr'
.. highlight: bash

synth-nmr
=========

.. conda:recipe:: synth-nmr
   :replaces_section_title:
   :noindex:

   NMR spectroscopy calculations for protein structures

   :homepage: https://github.com/elkins/synth-nmr
   :license: MIT / MIT
   :recipe: /`synth-nmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-nmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-nmr/meta.yaml>`_

   


.. conda:package:: synth-nmr

   |downloads_synth-nmr| |docker_synth-nmr|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.2-0``,  ``0.6.1-0``,  ``0.2.0-0``

      

   
   :depends on biotite: ``>=0.35.0``
   :depends on numpy: ``>=1.20``
   :depends on python: ``>=3.8``

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

    pixi global install synth-nmr

to add into an existing workspace instead, run::

    pixi add synth-nmr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install synth-nmr

Alternatively, to install into a new environment, run::

    conda create -n envname synth-nmr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/synth-nmr:<tag>

(see `synth-nmr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_synth-nmr| image:: https://img.shields.io/conda/dn/bioconda/synth-nmr.svg?style=flat
   :target: https://anaconda.org/bioconda/synth-nmr
   :alt:   (downloads)
.. |docker_synth-nmr| image:: https://quay.io/repository/biocontainers/synth-nmr/status
   :target: https://quay.io/repository/biocontainers/synth-nmr
.. _`synth-nmr/tags`: https://quay.io/repository/biocontainers/synth-nmr?tab=tags


.. raw:: html

    <script>
        var package = "synth-nmr";
        var versions = ["0.8.0","0.7.2","0.6.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synth-nmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synth-nmr/README.html