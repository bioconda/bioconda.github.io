:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukrep'
.. highlight: bash

eukrep
======

.. conda:recipe:: eukrep
   :replaces_section_title:
   :noindex:

   Classification of Eukaryotic and Prokaryotic sequences from metagenomic datasets

   :homepage: https://github.com/patrickwest/EukRep
   :license: MIT / MIT
   :recipe: /`eukrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep/meta.yaml>`_

   


.. conda:package:: eukrep

   |downloads_eukrep| |docker_eukrep|

   :versions:
      
      

      ``0.6.7-3``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``

      

   
   :depends on biopython: 
   :depends on kpal: 
   :depends on libgfortran: ``3.0.0.*``
   :depends on numpy: 
   :depends on python: 
   :depends on scikit-learn: ``0.19.2.*``

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

    pixi global install eukrep

to add into an existing workspace instead, run::

    pixi add eukrep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eukrep

Alternatively, to install into a new environment, run::

    conda create -n envname eukrep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eukrep:<tag>

(see `eukrep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eukrep| image:: https://img.shields.io/conda/dn/bioconda/eukrep.svg?style=flat
   :target: https://anaconda.org/bioconda/eukrep
   :alt:   (downloads)
.. |docker_eukrep| image:: https://quay.io/repository/biocontainers/eukrep/status
   :target: https://quay.io/repository/biocontainers/eukrep
.. _`eukrep/tags`: https://quay.io/repository/biocontainers/eukrep?tab=tags


.. raw:: html

    <script>
        var package = "eukrep";
        var versions = ["0.6.7","0.6.7","0.6.7","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukrep/README.html