:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hormon'
.. highlight: bash

hormon
======

.. conda:recipe:: hormon
   :replaces_section_title:
   :noindex:

   A tool for annotation of alpha satellite arrays in centromeres of a newly assembled human genome.

   :homepage: https://github.com/ablab/HORmon
   :license: GPL / GPLv2
   :recipe: /`hormon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon/meta.yaml>`_

   HORmon infer human monomers based on the given alpha\-satellite consensus template and centromeric sequence\, extract HORs and decompose centromeric sequence into HORs.


.. conda:package:: hormon

   |downloads_hormon| |docker_hormon|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on clustalo: 
   :depends on joblib: 
   :depends on networkx: 
   :depends on pygraphviz: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on setuptools: 
   :depends on stringdecomposer: 

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

    pixi global install hormon

to add into an existing workspace instead, run::

    pixi add hormon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hormon

Alternatively, to install into a new environment, run::

    conda create -n envname hormon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hormon:<tag>

(see `hormon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hormon| image:: https://img.shields.io/conda/dn/bioconda/hormon.svg?style=flat
   :target: https://anaconda.org/bioconda/hormon
   :alt:   (downloads)
.. |docker_hormon| image:: https://quay.io/repository/biocontainers/hormon/status
   :target: https://quay.io/repository/biocontainers/hormon
.. _`hormon/tags`: https://quay.io/repository/biocontainers/hormon?tab=tags


.. raw:: html

    <script>
        var package = "hormon";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hormon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hormon/README.html