:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knotannotsv'
.. highlight: bash

knotannotsv
===========

.. conda:recipe:: knotannotsv
   :replaces_section_title:
   :noindex:

   Post\-processing and annotation helper around AnnotSV results \(Perl\-based\).

   :homepage: https://github.com/mobidic/knotAnnotSV
   :license: GPL / GPL-3.0-or-later
   :recipe: /`knotannotsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotannotsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotannotsv/meta.yaml>`_

   knotAnnotSV is a simple tool to create a customizable html file
   \(or xlsm file compatible with thousands of SV\) from an AnnotSV output.



.. conda:package:: knotannotsv

   |downloads_knotannotsv| |docker_knotannotsv|

   :versions:
      
      

      ``1.1.5-0``

      

   
   :depends on perl: 
   :depends on perl-excel-writer-xlsx: 
   :depends on perl-sort-key: 
   :depends on perl-yaml-libyaml: 

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

    pixi global install knotannotsv

to add into an existing workspace instead, run::

    pixi add knotannotsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install knotannotsv

Alternatively, to install into a new environment, run::

    conda create -n envname knotannotsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/knotannotsv:<tag>

(see `knotannotsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_knotannotsv| image:: https://img.shields.io/conda/dn/bioconda/knotannotsv.svg?style=flat
   :target: https://anaconda.org/bioconda/knotannotsv
   :alt:   (downloads)
.. |docker_knotannotsv| image:: https://quay.io/repository/biocontainers/knotannotsv/status
   :target: https://quay.io/repository/biocontainers/knotannotsv
.. _`knotannotsv/tags`: https://quay.io/repository/biocontainers/knotannotsv?tab=tags


.. raw:: html

    <script>
        var package = "knotannotsv";
        var versions = ["1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knotannotsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knotannotsv/README.html