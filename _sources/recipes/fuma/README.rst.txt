:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fuma'
.. highlight: bash

fuma
====

.. conda:recipe:: fuma
   :replaces_section_title:
   :noindex:

   FuMa\: reporting overlap in RNA\-seq detected fusion genes

   :homepage: https://github.com/yhoogstrate/fuma/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fuma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma/meta.yaml>`_

   


.. conda:package:: fuma

   |downloads_fuma| |docker_fuma|

   :versions:
      
      

      ``4.0.0-0``,  ``3.0.6-0``,  ``3.0.5-2``,  ``3.0.5-1``,  ``3.0.5-0``,  ``3.0.3-0``

      

   
   :depends on htseq: ``>=0.6.1``
   :depends on numpy: 
   :depends on python: ``>=3.6``

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

    pixi global install fuma

to add into an existing workspace instead, run::

    pixi add fuma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fuma

Alternatively, to install into a new environment, run::

    conda create -n envname fuma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fuma:<tag>

(see `fuma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fuma| image:: https://img.shields.io/conda/dn/bioconda/fuma.svg?style=flat
   :target: https://anaconda.org/bioconda/fuma
   :alt:   (downloads)
.. |docker_fuma| image:: https://quay.io/repository/biocontainers/fuma/status
   :target: https://quay.io/repository/biocontainers/fuma
.. _`fuma/tags`: https://quay.io/repository/biocontainers/fuma?tab=tags


.. raw:: html

    <script>
        var package = "fuma";
        var versions = ["4.0.0","3.0.6","3.0.5","3.0.5","3.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fuma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fuma/README.html