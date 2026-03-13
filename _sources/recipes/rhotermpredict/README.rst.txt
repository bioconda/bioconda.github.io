:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhotermpredict'
.. highlight: bash

rhotermpredict
==============

.. conda:recipe:: rhotermpredict
   :replaces_section_title:
   :noindex:

   RhoTermPredict \(Barrick Lab Fork\)

   :homepage: https://github.com/barricklab/RhoTermPredict
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`rhotermpredict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhotermpredict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhotermpredict/meta.yaml>`_

   


.. conda:package:: rhotermpredict

   |downloads_rhotermpredict| |docker_rhotermpredict|

   :versions:
      
      

      ``3.4-0``

      

   
   :depends on biopython: ``>=0.1.0``
   :depends on numpy: ``>=1.15.4``
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

    pixi global install rhotermpredict

to add into an existing workspace instead, run::

    pixi add rhotermpredict

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rhotermpredict

Alternatively, to install into a new environment, run::

    conda create -n envname rhotermpredict

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rhotermpredict:<tag>

(see `rhotermpredict/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rhotermpredict| image:: https://img.shields.io/conda/dn/bioconda/rhotermpredict.svg?style=flat
   :target: https://anaconda.org/bioconda/rhotermpredict
   :alt:   (downloads)
.. |docker_rhotermpredict| image:: https://quay.io/repository/biocontainers/rhotermpredict/status
   :target: https://quay.io/repository/biocontainers/rhotermpredict
.. _`rhotermpredict/tags`: https://quay.io/repository/biocontainers/rhotermpredict?tab=tags


.. raw:: html

    <script>
        var package = "rhotermpredict";
        var versions = ["3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhotermpredict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhotermpredict/README.html